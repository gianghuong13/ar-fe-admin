import Image from 'next/image';

const Loading = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-2">
      <Image
        priority
        width={80}
        height={80}
        src="/assets/images/loading.gif"
        alt="Loading..."
      />
      <p className="font-montserrat text-primary-light text-[1.125rem] font-bold tracking-[1px] uppercase">
        loading
      </p>
    </div>
  );
};

export default Loading;
