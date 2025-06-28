// API configuration and utilities

export const api = {
  // Newsletter endpoints
  newsletter: {
    subscribe: async (data: { firstName: string; lastName: string; email: string }) => {
      // TODO: Implement when backend is ready
      console.log('Newsletter subscription:', data);
      return Promise.resolve({ success: true });
    }
  },
  
  // Meditation endpoints
  meditations: {
    getAll: async () => {
      // TODO: Implement when backend is ready
      return Promise.resolve([]);
    },
    getByTopic: async (topic: string) => {
      // TODO: Implement when backend is ready
      console.log('Get meditations by topic:', topic);
      return Promise.resolve([]);
    }
  },
  
  // User endpoints
  users: {
    signup: async (userData: { firstName: string; lastName: string; email: string; password: string }) => {
      // TODO: Implement when backend is ready
      console.log('User signup:', userData);
      return Promise.resolve({ success: true });
    }
  }
};