const BarPrice: React.FC = () => {
    return (
        <section id="bar-prices" className="bg-gray-900 text-white px-6 py-20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-pink-400 mb-12 uppercase tracking-wide">Bar Menu</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold text-pink-300">Bere</h3>
                        <p className="opacity-50">(Ciucaș and Radler 0% alc)</p>
                        <p className="mt-2 font-medium">5 lei</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold text-pink-300">Longdrinks</h3>
                        <p className="opacity-50">(Cuba Libre, Gin Tonic, Vodka & Suc)</p>
                        <p className="mt-2 font-medium">7.5 lei</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold text-pink-300">Shot</h3>
                        <p className="opacity-50">(Vodka, Rom, Jaeger, Gin)</p>
                        <p className="mt-2 font-medium">5 lei</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold text-pink-300">Juice</h3>
                        <p className="opacity-50">(Cola and Ciao)</p>
                        <p className="mt-2 font-medium">2.5 lei</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BarPrice;
