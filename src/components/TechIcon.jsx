import React, { useState } from 'react';

const TechIcon = ({ 
    icon: Icon, 
    name, 
    color, 
    size = "md", 
    showLabel = false, 
    tooltipPosition = "top",
    description
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const sizeClasses = {
        sm: "w-8 h-8 text-base",
        md: "w-11 h-11 text-xl",
        lg: "w-14 h-14 text-2xl",
        xl: "w-16 h-16 text-3xl"
    };

    const iconSizeClasses = {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-7 h-7",
        xl: "w-8 h-8"
    };

    const positionClasses = {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2"
    };

    return (
        <div 
            className="relative inline-flex flex-col items-center group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
            tabIndex={0}
            role="img"
            aria-label={name}
        >
            <div 
                className={`${sizeClasses[size]} rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-md group-focus:scale-110 group-focus:border-primary/50`}
                style={{
                    color: color || 'currentColor'
                }}
            >
                {Icon && <Icon className={`${iconSizeClasses[size]} transition-transform duration-200`} />}
            </div>

            {showLabel && (
                <span className="mt-2 text-xs font-medium text-slate-600 dark:text-slate-300 text-center truncate max-w-[80px]">
                    {name}
                </span>
            )}

            {/* Accessible Interactive Tooltip */}
            <div 
                className={`absolute ${positionClasses[tooltipPosition]} pointer-events-none z-30 transition-all duration-200 ${
                    isHovered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 pointer-events-none'
                }`}
            >
                <div className="bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 text-xs font-semibold px-2.5 py-1.5 rounded-md shadow-lg border border-slate-700 dark:border-slate-200 whitespace-nowrap flex flex-col items-center">
                    <span>{name}</span>
                    {description && (
                        <span className="text-[10px] font-normal text-slate-300 dark:text-slate-600 max-w-[180px] text-center whitespace-normal mt-0.5">
                            {description}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TechIcon;
