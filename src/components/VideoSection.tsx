export default function VideoSection() {
  return (
    <div
      id="video2"
      className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-neutral-50"
    >
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:ml-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Ещё одно видео</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Смотрите другие выпуски на моём канале — новые беседы и истории каждую неделю.
        </p>
        <a
          href="https://www.youtube.com/@евгений-к6г5ц?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide"
        >
          Подписаться на YouTube
        </a>
      </div>
      <div className="flex-1 h-[300px] sm:h-[400px] lg:h-[600px] mb-8 lg:mb-0 lg:order-2">
        <div className="w-full h-full bg-neutral-100 flex items-center justify-center relative overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full aspect-video max-h-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/msXdG7bmDjg"
                title="Второе видео"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
