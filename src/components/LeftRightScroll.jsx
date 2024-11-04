const topVideos = [
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
  ];

  const bottomVideos = [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
  ];
const LeftRightScroll = () => {
  return (
    <div className="min-h-screen video-scroll text-white flex flex-col items-center justify-center gap-8 overflow-hidden py-20">
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll-left gap-4 py-4">
          {[...Array(2)].map((_, i) => (
            <div key={`top-${i}`} className="flex gap-4 shrink-0">
              {topVideos.map((url, index) => (
                <img
                  key={`top-${i}-${index}`}
                  src={url}
                  className="h-48 w-72 object-cover rounded-lg"
                  alt={`Concert ${index + 1}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <h1 className="text-6xl font-bold tracking-tighter bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        VanityCard IN THE WILD
      </h1>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll-right gap-4 py-4">
          {[...Array(2)].map((_, i) => (
            <div key={`bottom-${i}`} className="flex gap-4 shrink-0">
              {bottomVideos.map((url, index) => (
                <img
                  key={`bottom-${i}-${index}`}
                  src={url}
                  className="h-48 w-72 object-cover rounded-lg"
                  alt={`Concert ${index + 7}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftRightScroll;
