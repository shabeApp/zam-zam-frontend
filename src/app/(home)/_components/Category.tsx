import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// const FEATURES = [
//     {
//         title: "Artisan Timepieces",
//         subtitle: "Precision",
//         image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
//         href: "/products",
//         span: "col-span-2 md:col-span-4 md:row-span-2",
//         aspect: "aspect-[4/3] sm:aspect-[16/9] md:aspect-auto",
//         label: "Bestseller"
//     },
//     {
//         title: "Gold Jewelry",
//         subtitle: "Essential",
//         image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
//         href: "/products",
//         span: "col-span-1 md:col-span-4 md:row-span-1",
//         aspect: "aspect-[4/5] md:aspect-auto",
//         label: "New"
//     },
//     {
//         title: "Selected Pearls",
//         subtitle: "Oceanic",
//         image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
//         href: "/products",
//         span: "col-span-1 md:col-span-4 md:row-span-1",
//         aspect: "aspect-[4/5] md:aspect-auto"
//     },
//     {
//         title: "Artistic Weaves",
//         subtitle: "The Edit",
//         image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
//         href: "/products",
//         span: "col-span-2 sm:col-span-1 md:col-span-5 md:row-span-1",
//         aspect: "aspect-[16/9] sm:aspect-[4/5] md:aspect-auto"
//     },
//     {
//         title: "Studio Audio",
//         subtitle: "Modern",
//         image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
//         href: "/products",
//         span: "col-span-2 sm:col-span-1 md:col-span-3 md:row-span-1",
//         aspect: "aspect-[16/9] sm:aspect-[4/5] md:aspect-auto"
//     }
// ];

// const FeatureItem = ({ feature, priority = false }: { feature: typeof FEATURES[0], priority?: boolean }) => (
//     <div className={cn("relative overflow-hidden group rounded-sm shadow-sm hover:shadow-royal transition-all duration-700", feature.span)}>
//         <Link href={feature.href} className="block h-full w-full">
//             <div className={cn("relative h-full w-full", feature.aspect)}>
//                 <Image
//                     src={feature.image}
//                     alt={feature.title}
//                     fill
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     priority={priority}
//                     className="object-cover transition-transform duration-1000 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent group-hover:from-black/90 transition-all duration-500" />
                
//                 {feature.label && (
//                     <div className="absolute top-4 right-4 z-10">
//                         <span className="glass px-2 py-0.5 text-[8px] tracking-widest font-black uppercase text-charcoal-ink shadow-sm">
//                             {feature.label}
//                         </span>
//                     </div>
//                 )}

//                 <div className="absolute bottom-0 left-0 p-3 sm:p-4 md:p-5 w-full transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
//                     <p className="text-antique-gold text-[8px] sm:text-[9px] tracking-[0.4em] font-medium uppercase mb-0.5">{feature.subtitle}</p>
//                     <h3 className="text-white text-base sm:text-lg md:text-xl font-heading mb-3 leading-tight font-medium">{feature.title}</h3>
//                     <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0">
//                         <span className="h-[1px] w-5 bg-antique-gold"></span>
//                         <ArrowRight className="text-white w-3 h-3 group-hover:translate-x-1 transition-transform" />
//                     </div>
//                 </div>
//             </div>
//         </Link>
//     </div>
// );

const Category = () => {
    return (
        <section className="py-10 sm:py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-3xl sm:text-4xl font-serif">Category</h2>
                        <div className="w-36 sm:w-52 h-0.5 bg-black mx-auto mt-2"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 justify-items-center">
                        {/* Sarees */}
                        <div className="relative group overflow-hidden w-full max-w-[280px] sm:w-72">
                            <div className="relative w-full h-[400px] sm:h-[480px]">
                                <Image
                                    src="https://i.pinimg.com/1200x/2e/2b/94/2e2b941dfa73d78f150375e477b35126.jpg"
                                    alt="Sarees"
                                    fill
                                    className="bg-black object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="absolute bottom-[178px] right-[-34px] -rotate-90 origin-bottom-right text-white text-5xl sm:text-6xl font-serif tracking-wide">
                                Sarees
                            </h3>
                        </div>

                        {/* Stole */}
                        <div className="relative group overflow-hidden w-full max-w-[280px] sm:w-72">
                            <div className="relative w-full h-[400px] sm:h-[480px]">
                                <Image
                                    src="https://i.pinimg.com/736x/4c/b7/62/4cb7626fe892fdecbf8ad3346f547e3d.jpg"
                                    alt="Stole"
                                    fill
                                    className="bg-black object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="absolute bottom-[104px] right-[-34px] -rotate-90 origin-bottom-right text-white text-5xl sm:text-6xl font-serif tracking-wide">
                                Stole
                            </h3>
                        </div>

                        {/* Punjabi */}
                        <div className="relative group overflow-hidden w-full max-w-[280px] sm:w-72">
                            <div className="relative w-full h-[400px] sm:h-[480px]">
                                <Image
                                    src="https://i.pinimg.com/1200x/e2/5b/ea/e25bea9852f6449cf2c162c1b09348b7.jpg"
                                    alt="Punjabi"
                                    fill
                                    className="bg-black object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="absolute bottom-[214px] right-[-36px] -rotate-90 origin-bottom-right text-white text-5xl sm:text-6xl font-serif tracking-wide">
                                Punjabi
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Category;
