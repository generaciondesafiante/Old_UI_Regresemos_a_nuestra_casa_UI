import { useAuthStore } from '../hooks/useAuthStore';

export const videos = async () => {
  const { videosLearningPath } = useAuthStore;
  const videosrender = videosLearningPath.map((videos) => {
    const key = videos.video;
    const title = videos.title;
    const url = videos.url;

    return {
      key: key,
      title: title,
      url: url,
    };
  });

  return videosrender;
};
