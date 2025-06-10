import React from 'react'
import {certificates} from "../lib/learning";

const Certificates = () => {
  return (
    <>
        <section className="py-16 px-4 max-w-6xl mx-auto my-10 bg-gray-100">
            <h2 className="text-4xl font-medium text-center mb-10 text-gray-700">Certifications</h2>
            <div className="grid gap-4 md:grid-cols-2">
    {
        certificates.map((certificate,index)=>(

    <div className="rounded-xl border p-4 shadow" key={index}>
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
    </>
  )
}

export default Certificates
