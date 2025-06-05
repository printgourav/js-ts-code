function getURL(dev = false, task ={}){
       let url = dev ? `tasks?status=ACTIVE&dev=true&size=20`: `/task`;
       const params = [];
       if(task.hasOwnProperty('nextTasks') && task.nextTasks){
         params.push('hasNext=true');
       }
       if(task.hasOwnProperty('prevTask') && task.prevTasks){
          params.push('hasPrev=true');
       }
       if(params.length > 0){
       url += url.includes('?') ? '?' & '&';
       url += params.join('&');
       return {url};
       }  
}
