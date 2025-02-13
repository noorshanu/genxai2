/* eslint-disable @next/next/no-img-element */


export default function GenXAIComponent() {
  return (
    <div className="bg-black text-white px-6 md:px-16 lg:px-32   ">
      {/* Header */}
      <div className="flex justify-center">
        <div className=" py-5 ">
          <img
            src="/images/Logo.png"
            alt=""
            className=" px-4 h-[45px] mx-auto"
          />
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
        {/* Examples */}
        <div className=" p-2 rounded-2xl ">
          <div className=" flex justify-center flex-col gap-3">
            <p className=" text-center flex justify-center">
              <img
                src="images/star.svg"
                alt=""
                className=" text-3xl text-center flex justify-center"
              />
            </p>
            <h2 className="text-base font-semibold mb-4 ">Create</h2>
          </div>
          <ul className="space-y-3  newbox p-3">
            <li className="bg-[#0047FF] border-[0.5px] border-[#9C9AFF] px-4 py-2 rounded-lg text-sm text-start">
              Set up AI Agents and tokens effortlessly with AI-driven tools.
            </li>
            <li className=" text-sm p-3 rounded-lg text-start"></li>
            <li className=" text-sm p-3 rounded-lg text-start">
              AI Agent Profile & Branding <br />
              Token Metadata & Contract Setup <br />
              Blockchain Selection <br />
              Market Trend Analysis <br />
            </li>
          </ul>
        </div>

        {/* Capabilities */}
        <div className=" p-2 ">
          <div className=" flex justify-center text-center flex-col gap-3">
            <img src="images/msg.svg" alt="" className=" text-3xl text-center flex justify-center mx-auto" />
            <h2 className="text-base font-semibold mb-4 ">Generate</h2>
          </div>
          <ul className="space-y-3  newbox p-3">
          <li className="bg-[#0047FF] border-[0.5px] border-[#9C9AFF] px-4 py-2 rounded-lg text-sm text-start">
              Set up AI Agents and tokens effortlessly with AI-driven tools.
            </li>
            <li className=" text-sm p-3 rounded-lg text-start"></li>
            <li className=" text-sm p-3 rounded-lg text-start">
              AI Agent Profile & Branding <br />
              Token Metadata & Contract Setup <br />
              Blockchain Selection <br />
              Market Trend Analysis <br />
            </li>
          </ul>
        </div>

        {/* Limitations */}
        <div className=" p-2 ">
          <div className=" flex justify-center text-center flex-col gap-3">
            <img src="images/chart.svg" alt="" className=" text-3xl text-center flex justify-center mx-auto" />
            <h2 className="text-base font-semibold mb-4 ">Trade</h2>
          </div>
          <ul className="space-y-3  newbox p-3">
          <li className="bg-[#0047FF] border-[0.5px] border-[#9C9AFF] px-4 py-2 rounded-lg text-sm text-start">
              Set up AI Agents and tokens effortlessly with AI-driven tools.
            </li>
            <li className=" text-sm p-3 rounded-lg text-start"></li>
            <li className=" text-sm p-3 rounded-lg text-start">
              AI Agent Profile & Branding <br />
              Token Metadata & Contract Setup <br />
              Blockchain Selection <br />
              Market Trend Analysis <br />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
