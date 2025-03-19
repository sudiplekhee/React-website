function Section(){
    return(
<>

<div className="w-full min-h-screen bg-white dark:bg-black">
  <div className="flex flex-col gap-4 items-center justify-center pt-6 pb-10 md:px-6 px-4">
    {/*  */}
    <img className="w-full h-[60vh] rounded" src="https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8bmF0dXJlfGVufDB8MHx8fDE3MzYxNTQzNzR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Top Image" />
    {/*  */}
    <div className="w-full flex gap-2 items-center justify-between">
      <div className="ld:w-1/3 flex flex-col">
        <h2 className="text-4xl capitalize font-semibold dark:text-white">Let's Explore the world with Us</h2>
        <p className="mt-2 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt incididuntadipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        <button className="w-fit px-4 py-2 rounded mt-4 font-semibold bg-blue-600 text-white">Learn More</button>
      </div>
      {/*  */}
      <img className="lg:block hidden w-[16rem] h-[18rem] border-[12px] border-gray-300 dark:border-gray-950" src="https://images.unsplash.com/photo-1475776408506-9a5371e7a068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxuYXR1cmV8ZW58MHwwfHx8MTczNjE1NDM3NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="image" />
      <img className="xl:block hidden w-[16rem] h-[18rem] border-[12px] border-gray-300 dark:border-gray-950" src="https://images.unsplash.com/photo-1475776408506-9a5371e7a068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxuYXR1cmV8ZW58MHwwfHx8MTczNjE1NDM3NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="image" />
      <img className="sm:block hidden w-[16rem] h-[18rem] border-[12px] border-gray-300 dark:border-gray-950" src="https://images.unsplash.com/photo-1475776408506-9a5371e7a068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxuYXR1cmV8ZW58MHwwfHx8MTczNjE1NDM3NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="image" />
    </div>
  </div>
</div>


</>
    )
}
export default Section