#include<iostream>
using namespace std;
class Intrest
{
	private: //Default Private not required to write "private"
	double p;
	double t;
	double r;
	
	public: 
		void getData()
		{
			cout<<"Enter Principal: ";
			cin>>p;
			cout<<"enter time: ";
			cin>>t;
			cout<<"enter rate: ";
			cin>>r;
		}
		void printData()
		{
			cout<<"Intrest:"<<p*t*r/100<<endl;
			;
		}
};

int main()
{
	Intrest i;
	i.getData();
	i.printData();
	return 0;
}