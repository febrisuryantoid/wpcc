#!/bin/bash
sed -i '/<span className="w-\[10px\] h-1.5 rounded-sm bg-blue-400/d' src/story/scenes/Scene02.tsx
sed -i '/<div className="flex items-center gap-1.5 my-3 justify-center md:justify-start">/a \
                      {[...Array(5)].map((_, i) => (\
                        <span \
                          key={i} \
                          className="w-[10px] h-1.5 rounded-sm bg-blue-400/80 shadow-[0_0_8px_#3b82f6] loading-wave-dot" \
                          style={{ animationDelay: `${i * 0.15}s`, animationDuration: '\''1.5s'\'' }}\
                        />\
                      ))}' src/story/scenes/Scene02.tsx

sed -i '/<span className="w-\[10px\] h-1.5 rounded-sm bg-blue-400/d' src/story/scenes/Scene03.tsx
sed -i '/<div className="flex items-center gap-2 my-3">/a \
              {[...Array(5)].map((_, i) => (\
                <span \
                  key={i} \
                  className="w-[10px] h-1.5 rounded-sm bg-blue-400/80 shadow-[0_0_8px_#3b82f6] loading-wave-dot" \
                  style={{ animationDelay: `${i * 0.15}s`, animationDuration: '\''1.5s'\'' }}\
                />\
              ))}' src/story/scenes/Scene03.tsx
