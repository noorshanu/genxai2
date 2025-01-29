/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaRegCopy } from "react-icons/fa6";

function AgentDetails() {
  return (
    <div className="bg-black pb-[5%] text-white  overflow-hidden">
      {/* About AgentX Section */}
      <div className="flex flex-col md:flex-row items-center mt-12 px-12 space-y-6 md:space-y-0 md:space-x-12">
        {/* Image Card */}
        <div className="bg-[#1c1e22] p-2 rounded-2xl shadow-lg">
          <img src="images/nft2.png" alt="AgentX" className="rounded-xl" />
          <div className=" flex justify-between items-center mt-4">
            <h3 className="text-lg font-semibold ">Name</h3>
            <p className="text-blue-400 text-xs">$AGENTX</p>
          </div>
          <div className=" flex gap-2 items-center pb-2 pt-1">
            <p className="text-gray-500 text-xs ">@username</p>
            <FaRegCopy className=" text-xs text-gray-500" />
          </div>
        </div>

        {/* Description */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">About Your AgentX</h2>
          <p className="text-gray-400 text-sm">
            Lorem ipsum margaretha Mattsson seska det mörka nätet. Kat tykast
            visess dere dopögt Björn Månsson. Bidende polytins ukan antenytrens
            i anagram fast bjudkaffe. <br /> Trerade avis. On Hans Lundgren
            sektig som hexatäktigt. Heteropol sebel realog såväl som nis ohore.
            Tepp Ingrid Olsson. Koren Carl Lundström od i koka böcker. Beng
            fangen esk djörjade. Heterotin eurose dev lavis. Benade medeltropi,
            om polysa trikotyr mar i koscheria. Desk kasm terast exoheten och
            Rolf Åström.
          </p>
          <p className=" py-2 text-sm text-gray-400">
            Lörem ipsum margaretha Mattsson seska det mörka nätet. Kat tykast
            visess dere dopögt Björn Månsson. Bidende polytins ukan antenytrens
            i anagram fast bjudkaffe. Trerade avis. On Hans Lundgren sektig som
            hexatäktigt. Heteropol sebel realog såväl som nis ohore. Tepp Ingrid
            Olsson. Koren Carl Lundström od i koka böcker. Beng fangen esk
            dijörade. Heterotin eurose dev lavis. Benade medeltropi, om polysa
            trikotyr mar i koscheria. Desk kasm terast exoheten och Rolf Åström.
          </p>
        </div>
      </div>
      <div className="  border-t border-gray-500 mt-12">

      </div>
    </div>
  );
}

export default AgentDetails;
