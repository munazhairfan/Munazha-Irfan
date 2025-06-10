import React from 'react'
import {certificates} from "@/lib/learning";
import {badges} from "@/lib/learning"

const Certificates = () => {
  return (
    <>
        <section className="py-16 px-4 max-w-6xl mx-auto my-10 bg-gray-100">
  <div>
    <h3 className="text-4xl font-medium text-center mb-10 text-gray-700">
      Hackathon Participation
    </h3>

    <div className="border rounded-xl p-6 shadow bg-white">
      <h4 className="text-2xl font-semibold text-gray-800 mb-2">
        🔨 Marketplace Builder Hackathon 2025
      </h4>
      <p className="text-sm text-gray-600 mb-4">
        Participated in a 6-day hackathon focused on building a modular online marketplace. Worked collaboratively to develop both frontend and backend systems, following a clear day-by-day milestone approach.
      </p>

      <p className="text-sm text-gray-700 mb-2">
        <strong>My Role:</strong> Frontend Developer & API Integrator
      </p>
      <section className="text-sm text-gray-700 mb-2">
        <strong>Key Contributions:</strong> 
        <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
          <li>Built responsive UI using Next.js and Tailwind CSS</li>
          <li>Integrated product APIs and user authentication</li>
          <li>Populated Sanity CMS fields with products</li>
          <li>Created modular React components for listings and checkout</li>
          <li>Managed GitHub repo and wrote developer documentation</li>
        </ul>
      </section>

      <p className="text-sm text-gray-700 mb-2">
        <strong>Tech Stack:</strong> Next.js, TypeScript, Tailwind CSS, Sanity CMS.
      </p>

      <a
        href="https://github.com/munazhairfan/Marketplace_Builder_Hackathon_2025"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline inline-block mt-4"
      >
        🔗 View GitHub Repository
      </a>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src="/project-images/sanity.png" alt="Sanity CMS" className="rounded-lg border" />
        <img src="/project-images/DFD.png" alt="DFD" className="rounded-lg border" />
      </div>
    </div>
  </div>
</section>
        <section className="py-16 px-4 max-w-6xl mx-auto my-10 bg-gray-100">
            <h2 className="text-4xl font-medium text-center mb-10 text-gray-700">Certifications</h2>
            <div className="grid gap-4 md:grid-cols-2">
    {
        certificates.map((certificate,index)=>(

    <div className="rounded-xl border p-4 shadow bg-gray-300" key={index}>
      <h3 className="text-xl font-semibold">{certificate.title}</h3>
      <p className="text-sm text-gray-500">Cisco Networking Academy</p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={certificate.link}
        className="text-blue-600 hover:underline mt-2 inline-block"
      >
        View Certificate
      </a>
    </div>
))
}
</div>
</section>
        <section className="py-16 px-4 max-w-6xl mx-auto my-10 bg-gray-100">
            <h2 className="text-4xl font-medium text-center mb-10 text-gray-700">Badges</h2>
            <div className="grid gap-4 md:grid-cols-2">
    {
        badges.map((badge,index)=>(

    <div className="rounded-xl border p-4 shadow bg-gray-300" key={index}>
      <h3 className="text-xl font-semibold">{badge.title}</h3>
      <p className="text-sm text-gray-500">Cisco via Credly</p>
      <a
        href={badge.link}
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline mt-2 inline-block"
      >
        View Badge
      </a>
    </div>
))
}
</div>
</section>

    </>
  )
}

export default Certificates
