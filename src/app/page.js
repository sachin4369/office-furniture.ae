import dynamic from 'next/dynamic'
const Catalog = dynamic(() => import('./components/Catalog/page'), {loading: () => <p>Loading...</p>,})
const HeroSection = dynamic(() => import('./components/HeroSection/page'), {loading: () => <p>Loading...</p>,})
const TrendingProducts = dynamic(() => import('./components/TrendingProducts/page'), {loading: () => <p>Loading...</p>,})

// import "tailwindcss/tailwind.css";  //import for individual

export default function Home() {
  return (
    <>
        <HeroSection />
        <TrendingProducts />
        <Catalog />
    </>
  )
}
