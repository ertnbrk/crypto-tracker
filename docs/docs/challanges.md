
---

### 📌 **4. Challenges & Solutions**
Create a file named **`challenges.md`** in your `docs-site/docs/` folder and add this content:

```md
---
title: Challenges & Solutions
---

##  API Rate Limits
**Issue:** The CoinGecko API enforces a limit of **50 requests per minute**.  
**Solution:** Implemented **React Query caching** with `staleTime: 60000` to minimize API calls and improve performance.

##  Pagination Behavior
**Issue:** Initially, the search functionality only worked on page 1.  
**Solution:** Reset pagination to page 1 whenever a search query is entered:
```javascript
onChange={(e) => { setSearch(e.target.value); setPage(1); }}
