
function Contect() {
    return (
        <>
            <section className="bg-gray-100 ">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                    <div className="max-w-2xl lg:max-w-4xl mx-auto text-center ">
                    <h2 className="bg-gradient-to-r f-w font-black  from-orange-400 to-pink-800 bg-clip-text text-transparent text-5xl"> Our Location</h2>
                    </div>
                    <div className=" lg:mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="rounded-lg overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/vt/data=F9p8tJeECJdl8TzuvGMoy8G_h6oc85Cpe6PqvT3cVdxi3tSy2VvELi_IXpbNcIE-n9-BoOQCNE-Fy2bgguxoa3NdLMqEq_rg7AKFG0ElEElHO0kH-wKASQJo0iBieJ7hX9SgYMFKNxbQuLkpQrDtUsf7_Rm0zlX_UJIoLVLlnFpUegJv_vIBny1TrRY_GE3kk7UxMkkBFU2roaBxAufsgZqVRigdVX76MTPz20DCryJjeD4gfVDgtlh5Czc4XYhhEtEs4EYbEBu30351wgm9PC-piJaOC2tL9O-sgdvtBQ"
                                    width="100%" height="480" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
                            </div>
                            <div>
                                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                                    <div className="px-6 py-4">
                                        <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                                        <p className="mt-1 text-gray-600">123 Main St, San Francisco, CA 94105</p>
                                    </div>
                                    <div className="border-t border-gray-200 px-6 py-4">
                                        <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                                        <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                                        <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                                        <p className="mt-1 text-gray-600">Sunday: Closed</p>
                                    </div>
                                    <div className="border-t border-gray-200 px-6 py-4">
                                        <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                                        <p className="mt-1 text-gray-600">Email: info@example.com</p>
                                        <p className="mt-1 text-gray-600">Phone: +1 23494 34993</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}



export default Contect
