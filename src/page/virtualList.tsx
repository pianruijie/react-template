/*
 * @Author: pianruijie pianruijie@baidu.com
 * @Date: 2025-01-24 16:25:03
 * @LastEditors: pianruijie pianruijie@baidu.com
 * @LastEditTime: 2025-02-05 15:26:52
 * @FilePath: /personal-code/react-template/src/page/virtualList.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useRef, useEffect } from 'react';

const VirtualList = ({ itemCount, itemHeight, renderItem, windowHeight }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef: any = useRef(null);

  const handleScroll = () => {
    console.log(containerRef.current.scrollTop)
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop);
    }
  };

  useEffect(() => {
    const container: HTMLElement | null = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const totalHeight = itemHeight * itemCount;
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    startIndex + Math.ceil(windowHeight / itemHeight),
    itemCount - 1
  );

  const visibleItems = [];
  for (let i = startIndex; i <= endIndex; i++) {
    visibleItems.push(
      <div
        key={i}
        style={{
          position: 'absolute',
          top: i * itemHeight,
          width: '100%',
          height: itemHeight,
        }}
      >
        {renderItem(i)}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        height: windowHeight,
        overflow: 'auto',
        position: 'relative',
      }}
    >
      <div style={{ height: totalHeight }}>
        {visibleItems}
      </div>
    </div>
  );
};

// 使用示例
const App = () => {
  const renderItem = (index) => {
    return <div style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>Item {index + 1}</div>;
  };

  return (
    <VirtualList
      itemCount={1000}
      itemHeight={50}
      renderItem={renderItem}
      windowHeight={500}
    />
  );
};

export default App;
