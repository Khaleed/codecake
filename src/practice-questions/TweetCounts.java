class TweetCounts {

    private Map<String, TreeMap<Integer, Integer>> map;
    
    public TweetCounts() {
        map = new HashMap<>();
    }
    
    public void recordTweet(String tweetName, int time) {        
        if (!map.containsKey(tweetName)) {
            map.put(tweetName, new TreeMap<>());
        }
        
        TreeMap<Integer, Integer> tweetMap = map.get(tweetName);
        tweetMap.put(time, tweetMap.getOrDefault(time, 0) + 1);
    }
    
    public List<Integer> getTweetCountsPerFrequency(String freq, String tweetName, int startTime, int endTime) {
        if (!map.containsKey(tweetName)) {
            return null;
        }
        
        List<Integer> result = new ArrayList<>();
        
        int interval = 0;
        
        int size = 0;
        
        if (freq.equals("minute")) {
            interval = 60;
        } else if (freq.equals("hour")) {
            interval = 3_600;
        } else {
            interval = 86_400;
        }
        
        size = ((endTime - startTime) / interval) + 1;
        
        int[] buckets = new int[size];
        
        TreeMap<Integer, Integer> tweetMap = map.get(tweetName);
        
        for (Map.Entry<Integer, Integer> entry : tweetMap.subMap(startTime, endTime + 1).entrySet()) {
            int index = (entry.getKey() - startTime) / interval;
            buckets[index] += entry.getValue();
        }
        
        for (int num : buckets) {
            result.add(num);
        }
        
        return result;
    }
}

/**
 * Your TweetCounts object will be instantiated and called as such:
 * TweetCounts obj = new TweetCounts();
 * obj.recordTweet(tweetName,time);
 * List<Integer> param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime);
 */
