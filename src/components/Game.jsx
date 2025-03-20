import Tag from "./Utilities/Tag";

function Game() {
    return (
        <div>
            <div
                className="flex justify-center text-center w-full my-10"
                style={{
                    height: "80vh",
                }}
            >
                <div
                    className="h-full rounded-lg overflow-hidden"
                    style={{ width: "80%" }}
                >
                    <iframe
                        id="playcanvas-frame"
                        title="build the void"
                        width="100%"
                        height="100%"
                        src="https://playcanv.as/p/c5BzuDCW/"
                    />
                </div>
            </div>
            <div className="max-w-3xl mx-auto text-center my-8">
                <div className="flex justify-center mb-4 flex-wrap gap-2 mt-4">
                    <Tag text={"Javascript"} />
                    <Tag text={"EtherJs"} />
                    <Tag text={"Solidity"} />
                    <Tag text={"PlayCanvas"} />
                </div>
                <blockquote className="italic flex-grow gap-24 font-serif text-xl text-gray-800">
                    <p>
                        Step into a developing space where creativity begins to
                        take shape.
                    </p>
                    <p>
                        Discover an early-stage game featuring basic gameplay
                        mechanics and nascent blockchain integration.
                    </p>
                    <p>
                        A modest start to a project with ambitions to blend
                        interactive design with decentralized technology over
                        time.
                    </p>
                </blockquote>
            </div>
        </div>
    );
}

export default Game;
