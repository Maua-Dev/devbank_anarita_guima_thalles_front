import React, { useState } from 'react';

const Note = ({ noteValue, quantity, onAdd, onRemove }) => (
    <div className="flex flex-col items-center w-full">
    
        <div className="w-full h-56 bg-[#7EB9F2] rounded-2xl border-[16px] border-solid border-[#C6DDF3] flex items-center justify-center shadow-sm">
            <span className="text-2xl text-white font-black">{noteValue}R$</span>
        </div>

  
        <div className="flex w-full mt-6 justify-between items-center gap-3">
            
           
            <div className="flex-1 h-14 bg-[#BFDBFE] rounded-2xl flex items-center justify-center">
                <span className="text-[#006CE0] font-bold text-lg">Quantidade</span>
            </div>

           
            <div className="flex-[0.8] h-14 bg-white rounded-2xl flex items-center justify-between px-4 shadow-sm">
                <button 
                    onClick={onRemove}
                    className="text-2xl font-bold text-black hover:scale-125 transition-transform"
                >
                    -
                </button>
                
                <span className="text-2xl font-bold text-black">
                    {quantity}
                </span>
                
                <button 
                    onClick={onAdd}
                    className="text-2xl font-bold text-black hover:scale-125 transition-transform"
                >
                    +
                </button>
            </div>
            
        </div>
    </div>
);

export default Note;