//USEUNIT CommonApplication

function Test1()
{
//  TestedApps.vettev.Run();
//  aqUtils.Delay(10000);
//  TestedApps.vettev.Close();

  CommonApplication_StartApplication();
  CommonApplication_StopProcess(processName); 
  
}
