export default {
    data: {
        time_h: "09",
        time_m: "30",
        time_period:"AM",
    },
    onInit() {
        this.fetchTime();
    },
    fetchTime : function(){
        let date = new Date();


        let hrs = date.getHours() + ""

        // 4 7
        if(hrs <10)
        {
            this.time_h_0 = 0 ;
            this.time_h_1 = hrs[0];
        }
        else
        {
            this.time_h_0 = hrs[0];
            this.time_h_1 = hrs[1];
        }

        let min = date.getMinutes() + ""

        if(min <10)
        {
            this.time_m_0 = 0;
            this.time_m_1 = min[0];
        }
        else
        {
            this.time_m_0 = min[0];
            this.time_m_1 = min[1];
        }

        //        this.time_m_0 = 9
        //        this.time_m_1 = 9

        this.time_period = date.getHours()  >= 12 ? 'PM' : 'AM';

    },
}
