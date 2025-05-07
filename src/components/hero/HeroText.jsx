export default function HeroText() {
    return (
        <div className="max-w-[500px] md:w-1/2 justify-items-start ">
        <h1 className="text-5xl md:text-(--title-font-size) leading-(--title-line-height)">
          Helping Kids Understand Feelings - With Emmo!
        </h1>
        <p className="py-9">
          A digital friend supporting emotional exploration and self-awarness
        </p>
        <input
          type="text"
          placeholder="Enter your email"
          alt="email input"
          className="text-[#ADAEBC] rounded-full border-1 border-(--bg-color) bg-white h-12 mr-4 pl-6 mb-4"
        ></input>
        <button className="bg-(--main-color) w-32 h-12 rounded-full text-white">
          Join Now
        </button>
      </div>
    )
}