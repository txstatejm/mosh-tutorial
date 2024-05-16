import Image from 'next/image';

const Hero = () => {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <Image 
          src="/james.jpg" 
          alt="James" 
          width={300} 
          height={100} 
          style={{ borderRadius: '50%' }} 
          className="morph border-black"
        />
      </div>
    
    );
  };

export default Hero;
