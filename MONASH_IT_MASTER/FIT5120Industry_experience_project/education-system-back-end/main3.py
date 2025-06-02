import json

from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
import pymysql
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import joinedload
from sqlalchemy import or_, func

app = Flask(__name__)
CORS(app)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://admin:wdy531520@localhost:3306/db_education'


# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:Bm%406-ai%2FB_%40M3cC@localhost:3306/education'

# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:Bm%406-ai%2FB_%40M3cC@localhost:3306/education'

# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:8uTrTaSJ&y4gu96cj9LY7^@52.63.208.7:3306/mysql_test'


app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://eduapp:password123@localhost:3306/db_education'


# Configure the SQLAlchemy database URI for connecting to the MySQL database
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:wdy531520@localhost:3306/db_education'
# Alternative database configurations (commented out)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://eduapp:password123@localhost:3306/db_education'
# mysql+pymysql://root:wdy531520@localhost:3306/db_education

# Disable the modification tracking feature of SQLAlchemy to save resources
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the SQLAlchemy object with the Flask app
db = SQLAlchemy(app)


# Define the 'Uni' model representing universities
class Uni(db.Model):
    __tablename__ = 'db_uni'
    id = Column(Integer, primary_key=True)
    uni_name = Column(String(255), unique=True, nullable=False)


# Define the 'Major' model representing academic majors
class Major(db.Model):
    __tablename__ = 'db_major'
    id = Column(Integer, primary_key=True)
    major_name = Column(String(200), nullable=False)
    course_code = Column(String(200), unique=True, nullable=False)


# Define the 'UniMajor' model representing the relationship between universities and majors
class UniMajor(db.Model):
    __tablename__ = 'db_uni_major'
    id = Column(Integer, primary_key=True, autoincrement=True)
    uni_id = Column(Integer, ForeignKey('db_uni.id'), nullable=False)
    major_id = Column(Integer, ForeignKey('db_major.id'), nullable=False)
    duration = Column(String(255))
    atar = Column(String(255))
    subjects = Column(String(255), nullable=False)

    # Establish relationships to 'Uni' and 'Major' models
    uni = relationship("Uni", backref="uni_majors")
    major = relationship("Major", backref="uni_majors")


# Define the 'Career' model representing career paths
class Career(db.Model):
    __tablename__ = 'db_career'
    id = Column(Integer, primary_key=True)
    career_name = Column(String(255), unique=True, nullable=False)


# Define the 'MajorCareersRelation' model representing the relationship between university majors and careers
class MajorCareersRelation(db.Model):
    __tablename__ = 'major_careers_relation'
    id = Column(Integer, primary_key=True, autoincrement=True)
    uni_major_id = Column(Integer, ForeignKey('db_uni_major.id'), nullable=False)
    career_id = Column(Integer, ForeignKey('db_career.id'), nullable=False)
    # Establish relationships to 'Career' and 'UniMajor' models
    career = relationship("Career", backref="major_relations")
    uni_major = relationship("UniMajor", backref="career_relations")


# Define the 'JobCareerRelation' model representing the relationship between jobs and careers
class JobCareerRelation(db.Model):
    __tablename__ = 'job_career_relation'

    id = Column(Integer, primary_key=True, autoincrement=True)
    job_id = Column(Integer, ForeignKey('db_job_type.id'), nullable=False)
    career_id = Column(Integer, ForeignKey('db_career.id'), nullable=False)

    # Establish relationship to 'Career' model
    career = relationship(
        "Career",
        backref="job_relations"
    )


# Define the 'JobType' model representing different job types
class JobType(db.Model):
    __tablename__ = 'db_job_type'

    id = Column(Integer, primary_key=True, autoincrement=True)
    job_name = Column(String(255), nullable=False, unique=True)

    # Establish relationship to 'JobCareerRelation' model
    career_relations = relationship(
        "JobCareerRelation",
        backref="job_type"
    )


# Define the 'SubjectSecondaryCollegeRelation' model representing the relationship between subjects and secondary colleges
class SubjectSecondaryCollegeRelation(db.Model):
    __tablename__ = 'db_subject_secondary_college_relation'

    id = Column(Integer, primary_key=True, autoincrement=True)
    subject_id = Column(Integer, ForeignKey('db_subject.id'), nullable=False)
    secondary_college_id = Column(Integer, ForeignKey('db_secondary_college.id'), nullable=False)

    # Establish relationships to 'Subject' and 'SecondaryCollege' models
    subject = relationship("Subject", backref="secondary_college_relations")
    secondary_college = relationship("SecondaryCollege", backref="subject_relations")


# Define the 'Subject' model representing academic subjects
class Subject(db.Model):
    """
    Represents a subject in the education system
    """
    __tablename__ = 'db_subject'

    id = Column(Integer, primary_key=True, autoincrement=True)
    subject_name = Column(String(255), nullable=False, unique=True)


@app.route('/api/all_subjects', methods=['GET'])
def get_all_subjects():
    """
    API to return all available subject names sorted alphabetically.
    Used by frontend to display subject suggestion buttons.
    """
    try:
        subjects = Subject.query.order_by(Subject.subject_name.asc()).all()
        grouped = {}
        for subject in subjects:
            first_letter = subject.subject_name[0].upper()
            grouped.setdefault(first_letter, []).append(subject.subject_name)
        return jsonify(grouped), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


# Define the 'SecondaryCollege' model representing secondary colleges
class SecondaryCollege(db.Model):
    """
    Represents a subject in the education system
    """
    __tablename__ = 'db_secondary_college'

    id = Column(Integer, primary_key=True, autoincrement=True)
    secondary_college_name = Column(String(255), nullable=False, unique=True)


# Define the API endpoint '/api/getUniInfo' to retrieve university and major information based on career names
@app.route('/api/getUniInfo', methods=['GET'])
def get_uni_info():
    # Retrieve 'career_names' and 'type' parameters from the GET request
    career_names = request.args.get('career_names', '')
    type = request.args.get('type', '')

    # Check if the request is based on job types
    if type == "job":
        # If no career names are provided, return an error
        if not career_names:
            return jsonify({'error': 'No career names provided'}), 400
        # Split the career names by comma and strip whitespace
        names_list = [name.strip() for name in career_names.split(',') if name.strip()]
        # If the list is empty after processing, return an error
        if not names_list:
            return jsonify({'error': 'No valid career names provided'}), 400
        try:
            # Retrieve careers associated with the provided job names
            careers = get_careers_by_job(names_list)
            # If no careers are found, return an empty list
            if len(careers) == 0:
                return jsonify([]), 200
            # Extract career IDs from the retrieved careers
            career_ids = [career["career_id"] for career in careers]
            # Query the database to find relationships between careers and university majors
            results = db.session.query(
                MajorCareersRelation,
                Career,
                UniMajor
            ).join(
                Career,
                MajorCareersRelation.career_id == Career.id,
            ).join(
                UniMajor,
                MajorCareersRelation.uni_major_id == UniMajor.id
            ).filter(
                MajorCareersRelation.career_id.in_(career_ids)
            ).all()
            # Prepare the response data
            response = []
            for relation, career, uniMajor in results:
                response.append({
                    "career_id": career.id,
                    "uni_major_id": relation.uni_major_id,
                    "career": {
                        "id": career.id,
                        "career_name": career.career_name,
                    },
                    "uni_major": {
                        "id": uniMajor.id,
                        "uni_id": uniMajor.uni_id,
                        "major_id": uniMajor.major_id,
                        "major": {
                            "major_name": uniMajor.major.major_name,
                            "course_code": uniMajor.major.course_code,
                        },
                        "duration": uniMajor.duration,
                        "uni_name": uniMajor.uni.uni_name,
                        "atar": uniMajor.atar,
                        "subjects": uniMajor.subjects,
                    }
                })
            # Return the response as JSON
            return jsonify(response)

        except Exception as e:
            # If an error occurs, return the error message
            return jsonify({'error': str(e)}), 500
    else:
        # If no career names are provided, return an error
        if not career_names:
            return jsonify({'error': 'No career names provided'}), 400
        # Split the career names by comma and strip whitespace
        names_list = [name.strip() for name in career_names.split(',') if name.strip()]
        # If the list is empty after processing, return an error
        if not names_list:
            return jsonify({'error': 'No valid career names provided'}), 400
        try:
            # Retrieve careers matching the provided names
            careers = get_careers(names_list)
            # If no careers are found, return an empty list
            if len(careers) == 0:
                return jsonify([]), 200
            # Extract career IDs from the retrieved careers
            career_ids = [career["id"] for career in careers]
            # Query the database to find relationships between careers and university majors
            results = db.session.query(
                MajorCareersRelation,
                Career,
                UniMajor
            ).join(
                Career,
                MajorCareersRelation.career_id == Career.id,
            ).join(
                UniMajor,
                MajorCareersRelation.uni_major_id == UniMajor.id
            ).filter(
                MajorCareersRelation.career_id.in_(career_ids)
            ).all()
            # Prepare the response data
            response = []
            for relation, career, uniMajor in results:
                response.append({
                    "career_id": career.id,
                    "uni_major_id": relation.uni_major_id,
                    "career": {
                        "id": career.id,
                        "career_name": career.career_name,
                    },
                    "uni_major": {
                        "id": uniMajor.id,
                        "uni_id": uniMajor.uni_id,
                        "major_id": uniMajor.major_id,
                        "major": {
                            "major_name": uniMajor.major.major_name,
                            "course_code": uniMajor.major.course_code,
                        },
                        "duration": uniMajor.duration,
                        "uni_name": uniMajor.uni.uni_name,
                        "atar": uniMajor.atar,
                        "subjects": uniMajor.subjects,
                    }
                })
            # Return the response as JSON
            return jsonify(response)
        except Exception as e:
            # If an error occurs, return the error message
            return jsonify({'error': str(e)}), 500


# Mental Health Counselor, Nurse, Nutritionist,
def get_careers(names_list):
    try:
        # Query for exact matches
        careers = Career.query.filter(Career.career_name.in_(names_list)).all()
        # Prepare the response
        if careers is None:
            return jsonify([])
        result = [{
            'id': career.id,
            'career_name': career.career_name
        } for career in careers]

        return result

    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500


def get_careers_by_job(names_list):
    try:
        # Query for exact matches
        jobs = JobType.query.filter(JobType.job_name.in_(names_list)).all()
        # Prepare the response

        if jobs is None:
            return jsonify([])
        result = [{
            'id': job.id,
            'job_name': job.job_name
        } for job in jobs]

        job_ids = [job["id"] for job in result]
        relations = db.session.query(JobCareerRelation) \
            .filter(JobCareerRelation.job_id.in_(job_ids)) \
            .all()
        _result = [{
            'job_id': relation.job_id,
            'career_id': relation.career_id
        } for relation in relations]
        return _result

    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500


@app.route('/api/secondary_colleges', methods=['GET'])
def search_secondary_colleges():
    # Retrieve the search keyword from the query parameters
    keyword = request.args.get('college_name', '').strip()
    # If no keyword is provided, return an error response
    if not keyword:
        return jsonify({'error': 'Search college name is required'}), 400

    try:
        # Perform a fuzzy (case-insensitive) search on the secondary_college_name field
        # using SQLAlchemy's ilike() for case-insensitive pattern matching
        colleges = SecondaryCollege.query.filter(
            SecondaryCollege.secondary_college_name.ilike(f'%{keyword}%')
        ).all()
        result = []
        # Iterate over all the matching secondary colleges
        for college in colleges:
            # Query the relationship table to get all subject relations for this college
            relations = SubjectSecondaryCollegeRelation.query.filter_by(
                secondary_college_id=college.id
            ).all()
            # Extract all related subject IDs from the relation entries
            subject_ids = [rel.subject_id for rel in relations]
            # Query the Subject table to get subject details using the extracted IDs
            subjects = Subject.query.filter(Subject.id.in_(subject_ids)).all()
            # Construct the college data with its related subjects
            result.append({
                'id': college.id,
                'name': college.secondary_college_name,  # Assuming there's a name field
                'subjects': [{
                    'id': sub.id,
                    'name': sub.subject_name
                } for sub in subjects]
            })
        # Return the final result as JSON
        return jsonify({'data': result}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/subject', methods=['GET'])
def get_colleges_by_subject():
    # Retrieve the 'subject_name' from the query parameters, removing leading/trailing whitespace
    subject_name = request.args.get('subject_name', '').strip()
    # If no subject name is provided, return a 400 Bad Request response
    if not subject_name:
        return jsonify({'error': 'Subject Name parameter is required'}), 400

    try:
        # Perform a case-insensitive fuzzy search on the subject name
        # Using SQLAlchemy's func.lower() to compare lowercase versions of both values
        matching_subjects = Subject.query.filter(
            func.lower(Subject.subject_name).contains(func.lower(subject_name))
        ).all()
        # If no subjects matched, return a 404 Not Found response
        if not matching_subjects:
            return jsonify({'message': f'No subjects found matching "{subject_name}"'}), 404

        result = []
        # Iterate over each matched subject
        for subject in matching_subjects:
            # Get all colleges that offer this subject
            # Get all entries from the relation table linking this subject to secondary colleges
            relations = SubjectSecondaryCollegeRelation.query.filter_by(
                subject_id=subject.id
            ).all()

            # If there are no relations,
            # skip this subject (no associated colleges)
            if not relations:
                continue
            # Extract the IDs of all related secondary colleges
            college_ids = [rel.secondary_college_id for rel in relations]
            # Query the SecondaryCollege table using the extracted college IDs
            colleges = SecondaryCollege.query.filter(
                SecondaryCollege.id.in_(college_ids)
            ).all()
            # Construct the subject information along with associated colleges
            subject_data = {
                'subject_id': subject.id,
                'subject_name': subject.subject_name,
                'secondaryColleges': [{
                    'college_id': col.id,
                    'college_name': col.secondary_college_name,
                } for col in colleges]
            }
            # Add this subject and its colleges to the result list
            result.append(subject_data)

        # If subjects were matched, but none had associated colleges, return a message
        if not result:
            return jsonify({
                'message': f'Found subjects matching "{subject_name}" but none have associated colleges'
            }), 404
        # Return the successful result as JSON, including the original search term
        return jsonify({
            'search_term': subject_name,
            'results': result
        }), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/getSecondaryCollegesByids', methods=['GET'])
def get_secondary_colleges_by_ids():
    """
    Retrieve secondary school information based on a list of ID.
    GET /api/secondary-colleges?ids=1,2,3
    """
    try:
        id_str = request.args.get('ids', '').strip()
        if not id_str:
            return jsonify({
                "status": "error",
                "message": "Required parameter 'ids' is missing.",
                "data": None
            }), 400

        try:
            college_ids = [int(id) for id in id_str.split(',')]
        except ValueError:
            return jsonify({
                "status": "error",
                "message": "Invalid ID format detected.",
                "data": None
            }), 400

        colleges = db.session.query(SecondaryCollege).filter(
            SecondaryCollege.id.in_(college_ids)
        ).all()

        if not colleges:
            return jsonify({
                "status": "success",
                "message": "Not Found",
                "data": []
            }), 200

        result = [{
            "id": college.id,
            "name": college.secondary_college_name
        } for college in colleges]

        return jsonify({
            "status": "success",
            "message": "success",
            "data": result
        }), 200

    except Exception as e:
        app.logger.error(f"Failed to query secondary school information.: {str(e)}")
        return jsonify({
            "status": "error",
            "message": "Internal server error.",
            "data": None
        }), 500


if __name__ == '__main__':
    app.run(debug=True, port=5003)
