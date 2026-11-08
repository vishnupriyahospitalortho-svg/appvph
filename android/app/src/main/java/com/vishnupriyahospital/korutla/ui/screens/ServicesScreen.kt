package com.vishnupriyahospital.korutla.ui.screens

import android.content.Intent
import android.net.Uri
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

data class DepartmentUi(
    val title: String,
    val titleTe: String,
    val description: String,
    val descriptionTe: String,
    val headDoctor: String,
    val highlights: List<String>,
    val icon: ImageVector
)

@Composable
fun ServicesScreen(
    isTelugu: Boolean,
    onNavigateToTimings: () -> Unit,
    modifier: Modifier = Modifier
) {
    val context = LocalContext.current

    val departments = remember {
        listOf(
            DepartmentUi(
                title = "Orthopaedics & Joint Replacement",
                titleTe = "ఆర్థోపెడిక్స్ & జాయింట్ రీప్లేస్‌మెంట్",
                description = "Advanced orthopaedic surgery under Dr. Naresh for knee/hip replacements, arthroscopy, and complex fracture care.",
                descriptionTe = "డాక్టర్ నరేష్ గారి ఆధ్వర్యంలో మోకాలి మరియు తుంటి కీళ్ల మార్పిడి, సంక్లిష్ట ఎముకల విరుగుడు, మరియు స్పైన్ కేర్.",
                headDoctor = "Dr. Naresh, MBBS, MS Ortho, FIJR",
                highlights = listOf("Total Knee Replacement (TKR)", "Total Hip Replacement (THR)", "Arthroscopy Key-hole Surgery", "Trauma & Fracture Fixation"),
                icon = Icons.Default.AccessibilityNew
            ),
            DepartmentUi(
                title = "Vishnu Priya Dental Clinic & Oral Surgery",
                titleTe = "విష్ణు ప్రియ డెంటల్ క్లినిక్ & దంత వైద్య విభాగం",
                description = "Complete oral healthcare, root canal treatments, cosmetic dentistry, and dental implants under Dr. Archana, BDS.",
                descriptionTe = "డాక్టర్ అర్చన (BDS) గారి ఆధ్వర్యంలో ఆధునిక డెంటల్ చైర్, డిజిటల్ RVG ఎక్స్-రే, రూట్ కెనాల్ మరియు నొప్పిల్లేని దంత చికిత్సలు.",
                headDoctor = "Dr. Archana, BDS",
                highlights = listOf("Single Sitting Root Canal (RCT)", "Dental Implants & Ceramic Crowns", "Teeth Alignment & Braces", "Painless Extraction & Scaling"),
                icon = Icons.Default.Mood
            ),
            DepartmentUi(
                title = "24x7 Trauma & Casualty Emergency",
                titleTe = "24 గంటల ఎమర్జెన్సీ & ట్రామా కేర్",
                description = "Immediate emergency response for road traffic accidents, acute fractures, and dislocations on NH 63.",
                descriptionTe = "ఎన్‌హెచ్ 63 పై జరిగే రోడ్డు ప్రమాదాలు మరియు ఎముకల గాయాలకు 24 గంటల తక్షణ అత్యవసర వైద్యం.",
                headDoctor = "Dr. Naresh & Emergency Duty Team",
                highlights = listOf("Emergency Casualty Bays", "Immediate Bone Immobilization", "Sterile Wound Suturing", "Ambulance Support"),
                icon = Icons.Default.Emergency
            ),
            DepartmentUi(
                title = "Digital Skeletal & Dental RVG X-Ray",
                titleTe = "డిజిటల్ ఎక్స్-రే & డెంటల్ ఇమేజింగ్",
                description = "High-frequency digital bone imaging and intra-oral dental radiography for instant precision diagnostics.",
                descriptionTe = "ఎముకల పరిశీలనకు స్పష్టమైన హై-ఫ్రీక్వెన్సీ డిజిటల్ ఎక్స్-రే మరియు డెంటల్ ఆర్వీజీ డిజిటల్ సెన్సార్.",
                headDoctor = "Diagnostic Team",
                highlights = listOf("High-Definition Skeletal X-Rays", "Intra-Oral Dental RVG X-Rays", "Instant Digital Reports", "Pre-op Clinical Lab"),
                icon = Icons.Default.Biotech
            ),
            DepartmentUi(
                title = "24-Hour In-House Pharmacy",
                titleTe = "24 గంటల ఆసుపత్రి ఫార్మసీ",
                description = "Fully stocked authentic medicines, surgical orthopaedic implants, dental medicines, knee braces, and belts.",
                descriptionTe = "అన్ని రకాల అత్యవసర మందులు, ఆర్థోపెడిక్ బెల్టులు మరియు దంత వైద్య సామాగ్రి 24 గంటలూ అందుబాటులో ఉంటాయి.",
                headDoctor = "Hospital Pharmacist Team",
                highlights = listOf("Genuine Medicines Only", "Orthopaedic Braces & Splints", "Dental Pharmaceuticals", "Round-the-clock Counter"),
                icon = Icons.Default.LocalPharmacy
            )
        )
    }

    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background),
        contentPadding = PaddingValues(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        item {
            Text(
                text = if (isTelugu) "విభాగాలు & సదుపాయాలు" else "Departments & Facilities",
                style = MaterialTheme.typography.titleLarge.copy(fontWeight = FontWeight.Bold)
            )
            Text(
                text = if (isTelugu)
                    "కోరుట్లలో ఎముకలు, కీళ్లు మరియు దంత వైద్యంలో అత్యున్నత ప్రమాణాలు"
                else
                    "Specialized Orthopaedic, Dental, Trauma, and Diagnostic healthcare in Korutla.",
                style = MaterialTheme.typography.bodySmall.copy(color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.7f)),
                modifier = Modifier.padding(top = 2.dp)
            )
        }

        items(departments) { dept ->
            Card(
                shape = RoundedCornerShape(16.dp),
                colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
                elevation = CardDefaults.cardElevation(defaultElevation = 1.dp),
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Box(
                            modifier = Modifier
                                .size(48.dp)
                                .background(MaterialTheme.colorScheme.primaryContainer, CircleShape),
                            contentAlignment = Alignment.Center
                        ) {
                            Icon(
                                imageVector = dept.icon,
                                contentDescription = dept.title,
                                tint = MaterialTheme.colorScheme.primary,
                                modifier = Modifier.size(26.dp)
                            )
                        }
                        Spacer(modifier = Modifier.width(12.dp))
                        Column {
                            Text(
                                text = if (isTelugu) dept.titleTe else dept.title,
                                style = MaterialTheme.typography.titleMedium.copy(fontWeight = FontWeight.Bold)
                            )
                            Text(
                                text = dept.headDoctor,
                                style = MaterialTheme.typography.labelSmall.copy(
                                    color = MaterialTheme.colorScheme.primary,
                                    fontWeight = FontWeight.SemiBold
                                )
                            )
                        }
                    }

                    Spacer(modifier = Modifier.height(10.dp))
                    Text(
                        text = if (isTelugu) dept.descriptionTe else dept.description,
                        style = MaterialTheme.typography.bodyMedium.copy(
                            color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.8f),
                            lineHeight = 20.sp
                        )
                    )

                    Spacer(modifier = Modifier.height(12.dp))

                    dept.highlights.forEach { item ->
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            modifier = Modifier.padding(vertical = 2.dp)
                        ) {
                            Icon(
                                Icons.Default.CheckCircle,
                                contentDescription = null,
                                tint = MaterialTheme.colorScheme.secondary,
                                modifier = Modifier.size(14.dp)
                            )
                            Spacer(modifier = Modifier.width(6.dp))
                            Text(text = item, style = MaterialTheme.typography.bodySmall.copy(fontSize = 12.sp))
                        }
                    }

                    Spacer(modifier = Modifier.height(10.dp))
                    Button(
                        onClick = onNavigateToTimings,
                        modifier = Modifier.fillMaxWidth(),
                        shape = RoundedCornerShape(10.dp),
                        colors = ButtonDefaults.buttonColors(
                            containerColor = MaterialTheme.colorScheme.primaryContainer,
                            contentColor = MaterialTheme.colorScheme.primary
                        )
                    ) {
                        Icon(Icons.Default.Schedule, contentDescription = null, modifier = Modifier.size(16.dp))
                        Spacer(modifier = Modifier.width(6.dp))
                        Text(if (isTelugu) "ఓపీ సమయాలు చూడండి" else "View Consultation Timings")
                    }
                }
            }
        }
    }
}
