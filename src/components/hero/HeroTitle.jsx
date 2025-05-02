export default function HeroTitle() {
    return (
        <div className="max-w-[500px] w-[50%] justify-items-start px-6 py-6">
        <h1 className="text-6xl">
          Helping Kids Understand Feelings - With Emmo!
        </h1>
        <p className="text-[#4B5563] py-9">
          A digital friend supporting emotional exploration and self-awarness
        </p>
        <input
          type="text"
          placeholder="Enter your email"
          className="text-[#ADAEBC] rounded-full border-[1px] border-[#E5E7EB] bg-white h-12 mr-[1rem] pl-6"
        ></input>
        <button className="bg-[#7C3AED] w-32 h-12 rounded-full text-white">
          Join Now
        </button>
      </div>
    )
}