## Library Name:
Smart TV

## Library Version:
1.0.0
## Library Release Date:
03-06-2022
## Library Overview:
Smart TV shows following functionalites.
- Displays list of movies in scroll view.
- Every card Has unique background.
- movies are differentiated based on genre.
<hr>

### GitHub link: [Smart TV](https://github.com/applibgroup/smart_tv)
<hr>

## Screenshot of the Library:
![image](https://user-images.githubusercontent.com/77436328/176849316-d69e1e8e-799d-42cb-9d1f-41308204cf32.png)


# Library Feature1:
### Description:
Fecthes Time
### Code Snippet:
```
fetchTime: function () {
        let date = new Date();


        let hrs = date.getHours() + ""

        if (hrs < 10) {
            this.time_h_0 = 0;
            this.time_h_1 = hrs[0];
        }
        else {
            this.time_h_0 = hrs[0];
            this.time_h_1 = hrs[1];
        }

        let min = date.getMinutes() + ""

        if (min < 10) {
            this.time_m_0 = 0;
            this.time_m_1 = min[0];
        }
        else {
            this.time_m_0 = min[0];
            this.time_m_1 = min[1];
        }
        this.time_period = date.getHours() >= 12 ? 'PM' : 'AM';

    }
```

### Screenshot:
![image](https://user-images.githubusercontent.com/77436328/176849745-b051618d-ab1f-4f12-9790-f71e269d7b8b.png)


# Library Feature2:
### Description:
on click card the background changes 
### Code Snippet:
```
    onTap: function(ele)
    {
        console.log(this.$element(ele)+" "+this.$element(ele).style.width);
        this.$element(ele).style.width = '500fp';
        this.$element(ele).style.height = '50fp';
        console.log(this.$element('myVideo'))
        this.$element('myVideo').attr.src = "common/image/4KColorExplosiononWHITEBackground.mp4"
    }
```
<!--img src="https://user-images.githubusercontent.com/77436328/173222109-a817734a-5dae-48d0-b7b6-809b6dc162d9.png" width="800" height="500"-->
### Screenshot: 
![image](https://user-images.githubusercontent.com/77436328/176850619-f63d3dfc-cba1-48a2-8ce6-1d5ba748ff65.png)


## Advanced feature that could be implemented in Future in this library: 
carousel view for upper section, future work on download section, search, apps and settings section
## Conclusion:
Displays number of movies in on section, responsive onTap and scroll view.
