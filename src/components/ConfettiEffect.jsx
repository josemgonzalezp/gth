import ConfettiExplosion from "react-confetti-explosion";

const ConfettiEffect = () => {
    return (
        <section className="w-full flex flex-row gap-4 justify-center mt-8 px-4">
            <p className="text-2xl font-semibold uppercase tracking-[0.3em] text-white">
                GANASTE
            </p>
            <ConfettiExplosion
                duration={5000}
                width={1000}
                particleCount={80}
                force={0.6}
                onComplete={() => {
                    window.location.reload();
                }}
            />
        </section>
    );
};

export default ConfettiEffect;
