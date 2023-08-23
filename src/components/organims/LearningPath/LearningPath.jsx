import { LearningPathTitleClass } from '../../molecules/LearningPahtTitleClass/LearningPathTitleClass';
import { LearningPahtProgress } from '../../molecules/LearningPathProgress/LearningPathProgress';
import { LearningPathVideoClass } from '../../molecules/LearningPathVideoClass/LearningPathVideoClass';
import './LearningPath.css';

export const LearningPaht = ({
  coursesData,
  setCoursesData,
  currentCourseURL,
  setCurrentCourseURL,
}) => {
  const currentCourseEndPoint = currentCourseURL.split('/');
  const courseSelected = coursesData.find((e) =>
    e.endpoint.includes(currentCourseEndPoint[1])
  );

  const lessonSelected = courseSelected.content.find(
    (e) => e.id == currentCourseEndPoint[2]
  );

  return (
    <div className="learningPath-container">
      <LearningPathVideoClass
        coursesData={coursesData}
        setCoursesData={setCoursesData}
        setCurrentCourseURL={setCurrentCourseURL}
        courseSelected={courseSelected}
        lessonSelected={lessonSelected}
      />
      <LearningPathTitleClass
        descriptionData={{
          courseName: courseSelected.name,
          lessonName: lessonSelected.title,
          lessonDescription: lessonSelected.description,
        }}
      />

      <nav className="classRoomRoute-container">
        {courseSelected.content.map((lesson, index) => {
          return (
            <LearningPahtProgress
              key={lesson.id}
              coursesData={coursesData}
              setCoursesData={setCoursesData}
              courseSelected={courseSelected}
              setCurrentCourseURL={setCurrentCourseURL}
              lessonData={{
                ...lesson,
                isLastLesson: courseSelected.content.length - 1 === index,
              }}
            />
          );
        })}
      </nav>
    </div>
  );
};
