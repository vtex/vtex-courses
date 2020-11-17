for course in `find . -type d -maxdepth 1`
do 
	for step in `find $course/steps -type d -maxdepth 1 -mindepth 1`
	do
		mv $step/answersheet/files/* $step/answersheet
		rmdir $step/answersheet/files
	done
done
