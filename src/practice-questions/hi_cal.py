"""

Your company built an in-house calendar tool called HiCal.
You want to add a feature to see the times in a day when
everyone is available.

To do this, you'll need to know when any team is having a
meeting. In HiCal, a meeting is stored as a tuple of integers
(start_time, end_time). These integers represent the number of
30-minute blocks past 9.00 am.

For example:

(2, 3) Meeting from 10.00 - 10.30 AM
(6, 9) Meeting from 12.00 - 1.30 PM

Write a function merge_ranges() that takes a list of multiple
meeting time ranges and returns a list of condensed ranges.

For example, given:

 9 - 9.30  10.30 - 11.30  11 - 1   2 - 3     1.30 - 2
[  (0, 1),   (3, 5),      (4, 8), (10, 12),  (9, 10) ]

The function should return:
  9 - 9.30  10.30 - 1   1.30 - 3
[ (0, 1),    (3, 8),   (9, 12) ]

Do not assume meetings are in order. The meeting times are
coming from multiple teams.

Write a solution that's efficient even when we can't put a nice
upper bound on the numbers representing our time ranges.

Here we've simplified our times down to the number of 30-minute
slots past 9:00 am. But we want the function to work even for very
large numbers, like Unix timestamps.

In any case, the spirit of the challenge is to merge meetings where start_time
and end_time don't have an upper bound.

>>> merge_ranges([(1, 3), (2, 4)])
[(1, 4)]

>>> merge_ranges(sorted([(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)]))
[(0, 1), (3, 8), (9, 12)]

"""

# merge_ranges :: [(Int, Int)] -> [(Int, Int)] || Interval -> Interval
# intrep. (Int, Int) as start and ending meeting time where each int represents 30 minutes past 9.00 AM

# Produce a list of condensed ranges from a given list of meeting times

# def merge_ranges(meetingTimes):
#     return [];

# def merge_ranges(meetingTimes):
#     """
#     sort meetings by start time
#     initialise merged_times with first meeting in meetingTimes
#     loop through list in one pass
#         to know if two meetings overlap check if end time of last merged meeting is equal or greater than start time of current meeting
#         merge the two meetings with a tuple of start_time of last meeting, end time of whichever meeting finishes last
#         else
#             merge current non-overlapping meeting with its start and end times
#     return merged_times
#     """
from operator import itemgetter

def merge_ranges(meeting_times):
    sorted_times = sorted(meeting_times, key=itemgetter(0))
    merged_times = [sorted_times[0]]
    for current_start, current_end in meeting_times:
        previous_merged_start, previous_merged_end = merged_times[-1]
        if (current_start <= previous_merged_end):
            merged_times[-1] = (previous_merged_start, max(previous_merged_end, current_end))
        else:
            merged_times.append((current_start, current_end))
    return merged_times

if __name__ == "__main__":
    import doctest
    doctest.testmod()
