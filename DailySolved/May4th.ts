function numRescueBoats(people: number[], limit: number): number {
  //sort people in ascending order
  people.sort((a, b) => a - b);
  //worst Case O(n) where n is nuber of people
  let min = people.length;

  while (people.length > 0) {
    //pop the last person
    const p1 = people.pop();
    //if the last person+ first personis less than or equal to the limit
    if (p1 !== undefined && p1 + people[0] <= limit) {
      //pop the first person
      const p2 = people.shift();
      //decrement the min here the boats
      min--;
    }
  }
  //after the loop return the min
  return min;
}
