

function Loader() {
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="relative">
                    <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                    <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-#ef4444 animate-spin" style={{ border: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)" }}>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loader
