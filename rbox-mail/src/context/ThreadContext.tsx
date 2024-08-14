import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface ThreadContextType {
  threadId: number | null;
  setThreadId: (id: number | null) => void;
}

const ThreadContext = createContext<ThreadContextType | undefined>(undefined);

export const ThreadProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [threadId, setThreadId] = useState<number | null>(null);

  useEffect(() => {
    console.log('Current Thread ID:', threadId);
  }, [threadId]);

  return (
    <ThreadContext.Provider value={{ threadId, setThreadId }}>
      {children}
    </ThreadContext.Provider>
  );
};

export const useThreadContext = (): ThreadContextType => {
  const context = useContext(ThreadContext);
  if (context === undefined) {
    throw new Error('useThreadContext must be used within a ThreadProvider');
  }
  return context;
};
