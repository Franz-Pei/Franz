# Education System - Career Pathways

## Project Overview
This project is an educational platform designed to help high school students explore career pathways and make informed decisions about their future education. The system includes a career assessment quiz that matches students with potential career clusters based on their interests and strengths.

## Features
- **Career Quiz**: Interactive assessment that helps students discover career clusters aligned with their interests
- **Personalized Recommendations**: Results showing career clusters with matching job examples
- **Educational Resources**: Information about courses and learning pathways
- **Modern Interface**: Clean, responsive design for all devices

## Technology Stack
- **Frontend**: Vue.js 3 with Vue Router
- **Backend**: Flask (Python) RESTful API
- **Styling**: CSS with responsive design
- **Build Tools**: Vite (Frontend), Gunicorn (Backend)
- **Deployment**: AWS EC2

## Project Structure

### Frontend (Vue.js)
```
education-system/
├── public/              # Static assets
├── src/                 # Source files
│   ├── assets/          # Images, styles, and other assets
│   ├── components/      # Vue components
│   │   └── CareerQuiz.vue   # Career assessment quiz component
│   ├── header/          # Header components
│   │   └── Header.vue   # Global navigation header
│   ├── router/          # Vue router configuration
│   ├── views/           # Page components
│   │   ├── HomeView.vue     # Home page
│   │   └── AboutView.vue    # About page
│   ├── App.vue          # Root component
│   └── main.js          # Entry point
├── index.html           # HTML entry point
└── package.json         # Project dependencies
```

### Backend (Flask)
```
myflask-proj/
├── app.py               # Main Flask application
├── templates/           # Server-side templates (for admin/debugging)
├── static/              # Static files
├── venv/                # Python virtual environment
└── requirements.txt     # Python dependencies
```

## Career Quiz Features
The career quiz component evaluates student preferences across multiple dimensions:
- Academic interests
- Activity preferences
- Work environment preferences
- Natural strengths
- Group collaboration styles
- Career priorities
- Sources of satisfaction

Results are mapped to six career clusters:
- IT & Data
- Health & Human Services
- Creative Arts & Media
- Engineering & Science
- Business & Management
- Education & Social Sciences

## Local Development Setup

### Frontend Prerequisites
- Node.js (v14.0 or higher recommended)
- npm or yarn

### Frontend Installation
1. Clone the repository
   ```bash
   git clone https://github.com/universekylin/FIT5120.git
   cd education-system
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Access the application at http://localhost:5173 (or the port shown in your terminal)

### Backend Prerequisites
- Python 3.7 or higher
- pip (Python package manager)

### Backend Setup
1. Navigate to the Flask project directory
   ```bash
   cd myflask-proj
   ```

2. Create and activate virtual environment
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies
   ```bash
   pip install Flask gunicorn
   ```

4. Run the development server
   ```bash
   python app.py
   ```

5. Access the backend at http://localhost:5002

## Cloud Deployment

Our application is deployed on AWS EC2 running Amazon Linux 2.

### Server Details
- **Instance Type**: Amazon EC2 (t2.micro)
- **Operating System**: Amazon Linux 2
- **IP Address**: 3.106.235.128
- **Backend Port**: 5000

### Deployment Steps

1. **Connect to the EC2 instance**:
   ```bash
   ssh -i /path/to/fit5120-keypair.pem ec2-user@3.106.235.128
   ```

2. **Set up the backend**:
   ```bash
   sudo yum update -y
   sudo yum install python3 gcc python3-devel -y
   sudo pip3 install virtualenv
   
   # Create project directory
   mkdir myflask-proj
   cd myflask-proj
   
   # Set up virtual environment
   python3 -m venv venv
   source venv/bin/activate
   
   # Install dependencies
   pip install Flask gunicorn
   ```

3. **Deploy frontend**:
   - Build the Vue.js application locally:
     ```bash
     npm run build
     ```
   - Transfer the contents of the `dist` directory to the EC2 instance:
     ```bash
     scp -i /path/to/fit5120-keypair.pem -r dist/* ec2-user@3.106.235.128:/home/ec2-user/myflask-proj/static/
     ```

4. **Configure the Flask application to serve Vue.js frontend**:
   - Modify app.py to serve static files:
     ```python
     from flask import Flask, render_template, send_from_directory
     
     app = Flask(__name__, static_folder='static', static_url_path='/')
     
     @app.route('/')
     def index():
         return send_from_directory(app.static_folder, 'index.html')
     
     # Add API routes as needed
     
     if __name__ == '__main__':
         app.run(host='0.0.0.0', debug=True)
     ```

5. **Run with Gunicorn**:
   ```bash
   source venv/bin/activate
   gunicorn -w 3 -b 0.0.0.0:5000 app:app
   ```

6. **Set up as a service** (for production):
   ```bash
   sudo nano /etc/systemd/system/flask-app.service
   ```
   
   Add the following content:
   ```
   [Unit]
   Description=Gunicorn instance to serve flask application
   After=network.target

   [Service]
   User=ec2-user
   Group=ec2-user
   WorkingDirectory=/home/ec2-user/myflask-proj
   Environment="PATH=/home/ec2-user/myflask-proj/venv/bin"
   ExecStart=/home/ec2-user/myflask-proj/venv/bin/gunicorn --workers 3 --bind 0.0.0.0:5000 app:app

   [Install]
   WantedBy=multi-user.target
   ```
   
   Enable and start the service:
   ```bash
   sudo systemctl enable flask-app
   sudo systemctl start flask-app
   sudo systemctl status flask-app
   ```

### Security Configuration

1. **AWS Security Groups**:
   - Allow inbound traffic on ports 22 (SSH) and 5000 (application)
   - Restrict SSH access to trusted IP addresses

2. **Keep software updated**:
   ```bash
   sudo yum update -y
   pip install --upgrade pip
   ```

### Troubleshooting

- **Application not accessible**:
  - Verify AWS security group settings
  - Check if Gunicorn is running: `ps aux | grep gunicorn`
  - Examine logs: `journalctl -u flask-app.service`

- **Frontend not loading properly**:
  - Ensure Vue Router is configured for history mode
  - Verify that all static assets are properly served

## Future Improvements

- Implement a CI/CD pipeline for automated deployments
- Add a staging environment for testing
- Set up HTTPS with Let's Encrypt and Nginx
- Implement database integration for storing user results
- Set up monitoring and logging with CloudWatch
- Configure load balancing for high availability

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Created as part of FIT5120 unit at Monash University
- Career assessment methodology based on educational research
