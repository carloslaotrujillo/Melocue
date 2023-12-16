import {
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  MusicalNoteIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid';

const currentYear = new Date().getFullYear();

const cards = [
  {
    name: 'Craft Your Audiophile Profile',
    description:
      'Define your music tastes and equipment preferences in a personalized profile. Connect with like-minded enthusiasts and tailor your Melocue experience to your sonic passions.',
    icon: UserCircleIcon,
  },
  {
    name: 'Streamlined Music Ecosystem',
    description:
      'Integrate and manage your playlists from top music services. Melocue is your central hub for a seamless and personalized listening journey.',
    icon: MusicalNoteIcon,
  },
  {
    name: 'Engage in SoundSpaces',
    description:
      'Connect with the community in audio rooms. Share your sound experiences, collaborate on playlists, and discover music in new dimensions together.',
    icon: UserGroupIcon,
  },
  {
    name: 'Your Audio Marketplace',
    description:
      'Buy and sell audio gear with ease. Our dedicated marketplace brings you closer to the equipment that defines the quality of sound you seek.',
    icon: ShoppingCartIcon,
  },
  {
    name: 'Learn and Grow',
    description:
      'Access a wealth of tutorials and webinars. From the fundamentals of audio to advanced techniques, expand your knowledge and skills with Melocue.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Supportive Community',
    description:
      'Tap into the collective wisdom of our audiophile community for insights, help, or to share your own expertise. We’re here to support each other.',
    icon: ChatBubbleLeftRightIcon,
  },
];

const navigation = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props) => (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-6 w-6 text-lime-400"
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (props) => (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-6 w-6 text-lime-400"
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'X',
    href: '#',
    icon: (props) => (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-6 w-6 relative top-0.5 left-1 text-lime-400"
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M 11.902344 8.464844 L 19.347656 0 L 17.582031 0 L 11.117188 7.347656 L 5.957031 0 L 0 0 L 7.808594 11.113281 L 0 19.988281 L 1.765625 19.988281 L 8.589844 12.226562 L 14.042969 19.988281 L 20 19.988281 Z M 9.484375 11.210938 L 8.695312 10.105469 L 2.398438 1.300781 L 5.109375 1.300781 L 10.191406 8.40625 L 10.980469 9.511719 L 17.585938 18.75 L 14.875 18.75 Z M 9.484375 11.210938"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (props) => (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-6 w-6 text-lime-400"
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export const ComingSoon = () => {
  return (
    <div className="relative isolate overflow-x-hidden bg-gray-900 py-24 sm:py-32 w-full h-full lg:h-screen">
      <img
        src="https://source.unsplash.com/music-room-with-lights-turned-on-gUK3lA3K7Yo"
        alt="Room full of students"
        className="absolute inset-0 -z-10 w-full h-full object-cover opacity-25"
      />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-lime-400 sm:text-6xl">
            Melocue
          </h2>
          <p className="mt-6 mx-auto max-w-4xl text-lg leading-8 text-gray-300">
            Discover the ultimate social network tailored for audio enthusiasts.
            Melocue brings you closer to the music you love through advanced
            audio tools, personalized AI recommendations, and a thriving
            marketplace. Enhance your audio experience with high-fidelity
            storage, exclusive content, and seamless smart home integration.
            Share your sound, learn from the best, and join our global community
            of melomaniacs.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
            >
              <card.icon
                className="h-7 w-5 flex-none text-lime-400"
                aria-hidden="true"
              />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-transparent">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-evenly lg:px-8 lg:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; {currentYear}{' '}
              <span className="text-lime-400">Melocue</span> | All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
