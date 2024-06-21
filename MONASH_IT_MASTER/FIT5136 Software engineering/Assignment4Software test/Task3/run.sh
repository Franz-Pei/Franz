rm -rf /home/report.csv /home/report /home/out /home/jacoco.exec
javac -g -d /home/out -cp target:junit-platform-console-standalone-1.10.0.jar /home/**.java
java  -javaagent:jacoco/jacocoagent.jar  -jar junit-platform-console-standalone-1.10.0.jar --class-path /home/out --select-class Laundromat --select-class LaundromatTest 
# java -jar jacoco/jacococli.jar report /home/jacoco.exec --classfiles /home/out --sourcefiles /home/ --csv report.csv
java -jar jacoco/jacococli.jar report /home/jacoco.exec --classfiles /home/out --sourcefiles /home/ --html report
