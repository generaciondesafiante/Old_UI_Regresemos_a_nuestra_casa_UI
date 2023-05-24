import { useAuthStore } from '../hooks/useAuthStore';

const videos = async () => {
  const { videosLearningPath } = useAuthStore;
  const videosrender = videosLearningPath.map((videos) => {
    key = videos.video;
    videos.title;
    videos.url;
  });
  console.log(videosrender);
};

videos();
