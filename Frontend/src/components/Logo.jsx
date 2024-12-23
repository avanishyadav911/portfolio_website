import { FiTriangle } from 'react-icons/fi'

export const Logo = () => {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <FiTriangle className="w-8 h-8 text-white transform -rotate-15 stroke-[1.5]" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[2px] h-4 bg-white transform rotate-[25deg] translate-x-[2px] translate-y-[1px] glow" />
      </div>
      <style jsx>{`
        .glow {
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  )
}

