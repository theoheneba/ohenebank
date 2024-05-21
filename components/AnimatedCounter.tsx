'use client';
import React from 'react'
import CountUp from 'react-countUp'





const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
        <CountUp
        decimal="."
        prefix="GHc"
        decimals={2}
        end={amount} />
    </div>
  )
}

export default AnimatedCounter