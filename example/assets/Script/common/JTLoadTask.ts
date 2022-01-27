import { info } from "./JTFunctionUtils";

export default class JTLoadTask extends c.JTTaskExecutor
{
        constructor()
        {
                super();
        }

        public async execute(): Promise<any> 
        {
            
                let timer:c.JTITimer = c.JTTimer.create(1000, 1);
                timer.addEventListener(c.JTTimeEvent.TIMER_COMPLETE, this.onTimerComplete, this);
                timer.start();
           
        }

        protected onTimerComplete(e):void
        {
                this.release();
                info("1000");
        }
}
