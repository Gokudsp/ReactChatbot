import moment from "moment"

export const analyze = (text) => {
    if (text.includes('hi') || text.includes('hai') || text.includes("hello"))
        return 'Hi, How can i help you?'
     else if (text.includes('goku'))
        return 'Im Chatbat create by Goku?'
        else if (text.includes('miss you'))
        return 'I miss you to?'

    else if (text.includes('date'))
        return moment().format('MMMM Do YYYY')
    else if (text.includes("time"))
        return moment().format("h:mm:ss ")
    else if (text.includes('google link'))
        return 'https://www.google.com'

    else if (text.includes('tnpsc'))
      return 'https://www.tnpsc.gov.in/'

      else if (text.includes('isro'))
      return 'https://www.isro.gov.in//'

      
      else if (text.includes('drdo'))
      return 'https://www.drdo.gov.in/'

      else if (text.includes('police'))
      return 'https://www.tnusrb.tn.gov.in/'

      else if (text.includes('salem'))
      return 'https://salem.nic.in/'

    else if (text.includes("thank you"))

        return 'Thanks for Contacting me. Have a nice Day'
    return "I can't get you. Can you rephrase the message?"


}


