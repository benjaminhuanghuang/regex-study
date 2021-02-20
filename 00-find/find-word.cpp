#include <iostream>
#include <regex>

using namespace std;

int main(){
  string stringNum= "1234545667780000";
  
  // \\d
  regex regexNum(R"(\d*)");

  if(regex_match(stringNum, regexNum)){
    cout << "find." << endl;
  }
}