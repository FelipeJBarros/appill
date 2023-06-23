
import React from "react";
import CalendarStrip from 'react-native-calendar-strip';
import 'moment/locale/br';
import {Box, HStack, Image, Text, VStack} from 'native-base'
interface CalendarProps{
    caledar: string
}

export default function Calendar() {
  const pillIcon ='../../../assets/images/pill-icon.png'
  const locale ={
    name: 'br-br',
    config: {
      months : 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
        monthsShort : 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
        weekdays : 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
        weekdaysShort : 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
        weekdaysMin : 'dom_2ª_3ª_4ª_5ª_6ª_sáb'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY [às] LT',
            LLLL : 'dddd, D [de] MMMM [de] YYYY [às] LT'
      },
      calendar: {
        sameDay: '[Hoje às] LT',
        nextDay: '[Amanhã às] LT',
        nextWeek: 'dddd [às] LT',
        lastDay: '[Ontem às] LT',
        sameElse: 'L'
    },
      relativeTime:  {
        future : 'em %s',
        past : '%s atrás',
        s : 'segundos',
        m : 'um minuto',
        mm : '%d minutos',
        h : 'uma hora',
        hh : '%d horas',
        d : 'um dia',
        dd : '%d dias',
        M : 'um mês',
        MM : '%d meses',
        y : 'um ano',
        yy : '%d anos'
    },
    ordinal : '%dº'
}
  };
  return(
    <VStack>
      <Text color={"#fff"} fontSize={20}>Semana atual</Text>
      <CalendarStrip
  
                      scrollable={true}
                      scrollerPaging={true}
                      style={{height: 100, paddingTop: 20, paddingBottom: 20}}
                      // calendarColor={'#fff'}
                      dayContainerStyle={{maxHeight: 300, backgroundColor: '#72081B',borderRadius: 10, height:60,}}
                      dateNumberStyle={{color: '#fff', fontSize: 20}}
                      iconLeftStyle={{color: "#AC0C29"}}
                      iconRightStyle={{color: "#AC0C29"}}
                      locale={locale}
                      calendarHeaderContainerStyle={{ justifyContent: 'flex-end', alignItems: 'flex-end'}}
                      calendarHeaderStyle={{fontSize: 1, color: '#fff',justifyContent: 'flex-start', alignItems: 'flex-start'}}
                      headerText=" "
                      leftSelector={[]}
                      rightSelector={[]}
                      dateNameStyle={{color: '#F98B9D'}}
                      iconContainer={{flex: 0.00000001}}
                      dayComponentHeight={80}
                      
                  />
                  <HStack
                  justifyContent={'center'}
                  alignItems={'center'}
                  variant={'filled'} 
                  backgroundColor={'#72081B'} 
                  borderRadius={10} 
                  marginTop={-2}
                  marginBottom={4}
                  height={100}
                  >
                  

            
                  <Image source={require( '../../../assets/images/pill-icon.png') } alt={"pilula"} marginRight={5}></Image>
                  <VStack >

                  <Text color={'#fff'} fontSize={'lg'} bold>Quarta-feira, 07 de junho</Text>
                  <Text color={'#fff'} fontSize={'md'}><Text bold>01/03 </Text>medicações realizadas</Text>
                  </VStack>
                   
                  </HStack>
    </VStack>
  );
}