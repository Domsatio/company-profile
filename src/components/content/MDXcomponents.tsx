import Image from 'next/image';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

// import CloudinaryVideoPlayer from '@/components/CloudinaryVideoPlayer';
// import Quiz from '@/components/content/blog/Quiz';
import GithubCard from '@/components/content/GithubCard';
import { Pre } from '@/components/content/Pre';
// import SplitImage, { Split } from '@/components/content/SplitImage';
// import TweetCard from '@/components/content/TweetCard';
import NextImage from '@/components/NextImage';
import CustomLink from '@/components/links/CustomLink';
import TechIcons from '@/components/TechIcons';

const MDXComponents = {
  a: CustomLink,
  Image,
  pre: Pre,
  // code: CustomCode,
  // CloudinaryImg,
  NextImage,
  // CloudinaryVideoPlayer,
  LiteYouTubeEmbed,
  // SplitImage,
  // Split,
  TechIcons,
//   TweetCard,
  GithubCard,
  // Quiz,
};

export default MDXComponents;
