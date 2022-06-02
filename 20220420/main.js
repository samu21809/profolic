const svg =d3.select('body')
             .append('svg')
             .attr('class','first')
             .attr('transform','translate(10,0)')
             .attr('width',350)
             .attr('height',300)
             .style('fill','black');
const height_male = svg.append('g')
                       .attr('transform','translate(100,100)');
const height_female = svg.append('g').attr('transform','translate(100,200)');
height_male.append('line')
           .attr('x1',0).attr('x2',173.5).style('stroke','black').style('stroke-width','1');
height_male.append('circle').attr('cx',173.5).attr('cy',0).attr('r',3).style('stroke','black').style('fill','black');
height_male.append('text').attr('x',0).attr('y',20).text("台灣男生平均身高 173.5 cm");                                

height_female.append('line').attr('x1',0).attr('x2',161.5).style('stroke','black');
height_female.append('circle').attr('cx',161.5).attr('cy',0).attr('r',3);
height_female.append('text').attr('x',0).attr('y',20).text("台灣女生平均身高 161.5 cm")

const svg2 =d3.select('body')
             .append('svg')
             .attr('transform','translate(10,0)')
             .attr('class','second')
             .attr('width',350)
             .attr('height',300)
             .style('fill','black');
const height_male2 = svg2.append('g')
                       .attr('transform','translate(100,100)');
const height_female2 = svg2.append('g').attr('transform','translate(100,200)');
height_male2.append('line')
           .attr('x1',0).attr('x2',177.1).style('stroke','black').style('stroke-width','1');
height_male2.append('circle').attr('cx',177.1).attr('cy',0).attr('r',3).style('stroke','black').style('fill','black');
height_male2.append('text').attr('x',0).attr('y',20).text("美國男生平均身高 177.1 cm");                                

height_female2.append('line').attr('x1',0).attr('x2',161.5).style('stroke','black');
height_female2.append('circle').attr('cx',163.5).attr('cy',0).attr('r',3);
height_female2.append('text').attr('x',0).attr('y',20).text("美國女生平均身高 163.5 cm")

const svg3 =d3.select('body')
             .append('svg')
             .attr('transform','translate(10,0)')
             .attr('class','third')
             .attr('width',350)
             .attr('height',300)
             .style('fill','black');

const height_male3 = svg3.append('g')
                       .attr('transform','translate(100,100)');
const height_female3 = svg3.append('g').attr('transform','translate(100,200)');
height_male3.append('line')
           .attr('x1',0).attr('x2',170.7).style('stroke','black').style('stroke-width','1');
height_male3.append('circle').attr('cx',170.7).attr('cy',0).attr('r',3).style('stroke','black').style('fill','black');
height_male3.append('text').attr('x',0).attr('y',20).text("日本男生平均身高 170.7 cm");                                

height_female3.append('line').attr('x1',0).attr('x2',157.8).style('stroke','black');
height_female3.append('circle').attr('cx',157.8).attr('cy',0).attr('r',3);
height_female3.append('text').attr('x',0).attr('y',20).text("日本女生平均身高 157.8 cm")
