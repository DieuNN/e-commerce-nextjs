import React from 'react';
import { CreditCard, Package, Headset } from 'lucide-react';

const Benefits = () => {
    const benefits = [
        {
            title: 'Payment Method',
            description: 'We offer flexible payment options, to make easier.',
            icon: <CreditCard className="w-12 h-12 text-[#6B7280]" />,
            bgColor: 'bg-[#F0E6FF]',
            iconBg: 'bg-[#F0E6FF]'
        },
        {
            title: 'Return policy',
            description: 'You can return a product within 30 days.',
            icon: <Package className="w-12 h-12 text-[#6B7280]" />,
            bgColor: 'bg-[#FFF2E6]',
            iconBg: 'bg-[#FFF2E6]'
        },
        {
            title: 'Customer Support',
            description: 'Our customer support is 24/7.',
            icon: <Headset className="w-12 h-12 text-[#6B7280]" />,
            bgColor: 'bg-[#E6F9F0]',
            iconBg: 'bg-[#E6F9F0]'
        }
    ];

    return (
        <section className="bg-[#E6F2F5] py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-serif text-center text-[#1F2937] mb-16">
                    Benefits for your expediency
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className={`w-[108px] h-[108px] ${benefit.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                                {benefit.icon}
                            </div>
                            <h3 className="text-2xl font-serif text-[#1F2937] mb-4">
                                {benefit.title}
                            </h3>
                            <p className="text-[#6B7280] max-w-[250px] leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
