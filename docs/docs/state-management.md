
---

### 📌 **3. State Management**
Create a file named **`state-management.md`** in your `docs-site/docs/` folder and add this content:

```md
---
title: State Management
---

## Why React Query?

This project uses **React Query** for efficient state management when fetching and caching API data. This approach offers several advantages:

- **Automatic Caching**: Prevents unnecessary API calls by storing fetched data.
- **Background Updates**: Keeps data fresh without manually triggering re-fetching.
- **Pagination Support**: Allows smooth handling of paginated data.
- **Built-in Error Handling**: Displays error messages when API requests fail.

### **Implementation**

React Query is used to manage the API call in the main component:

```javascript
import { useQuery } from '@tanstack/react-query';
import fetchCryptoPrices from '../utils/api';

const { data, error, isLoading, refetch } = useQuery({
  queryKey: ['cryptoPrices'],
  queryFn: fetchCryptoPrices,
  staleTime: 60000, // Cache data for 1 minute
  refetchOnWindowFocus: false,
  keepPreviousData: true,
});
