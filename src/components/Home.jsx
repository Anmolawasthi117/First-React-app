import React from "react";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
function Home() {
  return (
    <>
      <div className="w-full h-[100vh] bg-slate-700 relative before:w-full before:h-full before:absolute before:bg-no-repeat before:bg-[url(https://images.unsplash.com/photo-1700159915592-004562ddcf6f?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] before:blur-sm rounded-b-[200px] before:rounded-b-[200px]" id="home">
        <main className="absolute uppercase  flex flex-col items-end w-full h-full p-8 justify-center  text-slate-500  font-semibold">
          <h1 className="text-7xl">tech.co</h1>
          <p>solution to all your problems</p>
        </main>
      </div>
      <div className="w-full h-[100vh] bg-[#040617] p-[500px] px-0 flex items-center justify-center mt-[-200px]">
        <img
          className=" w-[20%]  animate-pulse"
          src="https://blush.design/api/download?shareUri=2CC873ZoWCpGukho&c=New%2520Palette%25201_0%7E000000&bg=040617&w=800&h=800&fm=png"
          alt=""
        />
        <div className="flex w-[50%] flex-col items-center justify-center p-20 h-full">
          <p className="text-white ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
            architecto inventore veritatis neque sunt ducimus animi illum!
            Placeat veritatis tenetur quas repellat quam! Officia facere
            repellat fugiat reiciendis officiis nulla.
          </p>
        </div>
      </div>
      <div className=" w-full h-[120vh] bg-[#040617] mt-[-200px] flex " id="about">
        <div className="w-[70%] h-[100vh] bg-white flex flex-col items-center justify-center p-8 rounded-r-[200px]">
          <h1 className="uppercase border-black border-b-[2px] p-2 w-60 text-stone-900 font-bold ">
            Who are we?
          </h1>
          <p className="p-20 tracking-tighter leading-3 font-light text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, natus
            vero similique ipsam doloremque amet! Voluptas reiciendis, tenetur
            illum hic et accusamus maiores quibusdam enim, quidem provident ex
            tempora quaerat. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Omnis porro corporis fugiat beatae ipsam modi deserunt vel
            architecto neque inventore nobis dolore facilis repellat, eos eum
            quod provident eaque! Amet.Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Veritatis illo consectetur reprehenderit error.
            Deleniti hic modi assumenda ex pariatur ullam dolor magnam dolorum
            iusto, nihil dolore voluptas ipsum recusandae voluptate?Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Laborum rerum
            officiis, pariatur placeat rem impedit tenetur accusamus ipsa saepe
            ullam esse nisi atque neque earum maxime ad quos! Totam, sapiente!
          </p>
        </div>
      </div>
      <div className="w-full h-full bg-[#040617] justify-end flex" id="brands">
        <div className="bg-[#A18DAA] rounded-l-[200px] w-[70%] h-[70vh] p-10 flex flex-col items-center justify-center">
          <h1 className="uppercase text-white w-36 border-b-2 p-2">brands</h1>
          <article className="flex flex-wrap m-8 justify-center">
            <div className="delay-[0.3s] m-4 h-40 w-40 rounded-[50%] flex flex-col items-center justify-center bg-white text-black  hover:invert animate-bounce ">
              <AiFillGoogleCircle className="text-6xl" />
              <p>google</p>
            </div>
            <div className="delay-[0.7s] m-4 h-40 w-40 rounded-[50%] flex flex-col items-center justify-center bg-white text-black  hover:invert animate-bounce">
              <AiFillAmazonCircle className="text-6xl" />
              <p>amazon</p>
            </div>
            <div className="delay-[1.2s] m-4 h-40 w-40 rounded-[50%] flex flex-col items-center justify-center bg-white text-black  hover:invert animate-bounce">
              <AiFillYoutube className="text-6xl" />
              <p>youtube</p>
            </div>
            <div className="delay-[1.6s] m-4 h-40 w-40 rounded-[50%] flex flex-col items-center justify-center bg-white text-black  hover:invert animate-bounce">
              <AiFillInstagram className="text-6xl" />
              <p>instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
