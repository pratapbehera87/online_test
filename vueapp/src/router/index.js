import { createRouter, createWebHistory } from 'vue-router';
import CourseDetail from '../components/course/CourseDetail.vue';
import Course from '../components/course/Course.vue'
import ModeratorDashboard from '../components/course/ModeratorDashboard.vue';
import AddCourse from '../components/course/AddCourse'

const routes = [
  {
    path: '/exam/manage/course/detail/:course_id',
    name: 'course_detail',
    component: CourseDetail,
  },
  {
    path: '/exam/manage/mycourses',
    name: 'courses',
    component: Course,
  },
  {
    path: '/exam/manage/moderator_dashboard/',
    name: 'moderator_dashboard',
    component: ModeratorDashboard,
  },
  {
    path: '/exam/manage/addcourse/',
    name: 'add_course',
    component: AddCourse
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;