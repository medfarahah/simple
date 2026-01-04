'use client';

import { motion } from 'framer-motion';

interface BookingProgressProps {
  currentStep: number; // 1, 2, 3, or 4
}

export default function BookingProgress({ currentStep }: BookingProgressProps) {
  const steps = [
    { number: 1, label: 'Search Bus', icon: '🔍' },
    { number: 2, label: 'Select Seats', icon: '🪑' },
    { number: 3, label: 'Payment', icon: '💳' },
    { number: 4, label: 'Confirm', icon: '✓' }
  ];

  // Calculate bus position (0% to 100%)
  const busPosition = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      {/* Road and Steps */}
      <div className="relative">
        {/* Road Line */}
        <div className="absolute top-12 left-0 right-0 h-1 bg-gray-300 rounded-full">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: `${busPosition}%` }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-primary-500 via-accent-500 to-success-500 rounded-full"
          />
        </div>

        {/* Animated Bus */}
        <motion.div
          initial={{ left: '0%' }}
          animate={{ left: `${busPosition}%` }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute top-4 transform -translate-x-1/2"
          style={{ left: `${busPosition}%` }}
        >
          <motion.div
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, 1, 0, -1, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="text-6xl"
          >
            🚌
          </motion.div>
          
          {/* Exhaust smoke animation */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.8, 1.2, 0.8],
              x: [-10, -20, -30],
              y: [0, 5, 10]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeOut'
            }}
            className="absolute -bottom-2 -left-4 text-2xl"
          >
            💨
          </motion.div>
        </motion.div>

        {/* Step Circles */}
        <div className="relative flex justify-between pt-24">
          {steps.map((step) => {
            const isCompleted = step.number < currentStep;
            const isCurrent = step.number === currentStep;
            
            return (
              <div key={step.number} className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: step.number * 0.1 }}
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold transition-all relative ${
                    isCompleted
                      ? 'bg-gradient-to-br from-success-500 to-success-600 text-white shadow-lg'
                      : isCurrent
                      ? 'bg-gradient-to-br from-accent-500 to-accent-600 text-white shadow-xl animate-pulse'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {isCompleted ? (
                    <motion.span
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      ✓
                    </motion.span>
                  ) : (
                    <span>{step.icon}</span>
                  )}
                  
                  {isCurrent && (
                    <>
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-accent-400 opacity-30"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-accent-400"
                      />
                    </>
                  )}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: step.number * 0.1 + 0.2 }}
                  className={`mt-3 text-sm font-semibold text-center ${
                    isCurrent ? 'text-accent-600' : isCompleted ? 'text-success-600' : 'text-gray-500'
                  }`}
                >
                  {step.label}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

